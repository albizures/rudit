import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перелезть: PerfectVerb = {
  name: Word('перелезть', 5),
  singular1stPerson: Word('перелезу', 5),
  singular2ndPerson: Word('перелезешь', 5),
  singular3rdPerson: Word('перелезет', 5),
  plural1stPerson: Word('перелезем', 5),
  plural2ndPerson: Word('перелезете', 5),
  plural3rdPerson: Word('перелезут', 5),
  masculinePast: Word('перелез', 5),
  femininePast: Word('перелезла', 5),
  neuterPast: Word('перелезло', 5),
  pluralPast: Word('перелезли', 5),
  imperativeInformal: Word('перелезь', 5),
  imperativeFormal: Word('перелезьте', 5),
  imperfect: [],
};

perfectVerbs.set(перелезть.name.text, перелезть);

export { перелезть };