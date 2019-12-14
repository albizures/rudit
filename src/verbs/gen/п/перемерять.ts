import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемерять: PerfectVerb = {
  name: Word('перемерять', 7),
  singular1stPerson: Word('перемеряю', 7),
  singular2ndPerson: Word('перемеряешь', 7),
  singular3rdPerson: Word('перемеряет', 7),
  plural1stPerson: Word('перемеряем', 7),
  plural2ndPerson: Word('перемеряете', 7),
  plural3rdPerson: Word('перемеряют', 7),
  masculinePast: Word('перемерял', 7),
  femininePast: Word('перемеряла', 7),
  neuterPast: Word('перемеряло', 7),
  pluralPast: Word('перемеряли', 7),
  imperativeInformal: Word('перемеряй', 7),
  imperativeFormal: Word('перемеряйте', 7),
  imperfect: [],
};

perfectVerbs.set(перемерять.name.text, перемерять);

export { перемерять };