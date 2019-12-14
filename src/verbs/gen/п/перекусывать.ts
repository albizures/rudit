import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекусывать: PerfectVerb = {
  name: Word('перекусывать', 5),
  singular1stPerson: Word('перекусываю', 5),
  singular2ndPerson: Word('перекусываешь', 5),
  singular3rdPerson: Word('перекусывает', 5),
  plural1stPerson: Word('перекусываем', 5),
  plural2ndPerson: Word('перекусываете', 5),
  plural3rdPerson: Word('перекусывают', 5),
  masculinePast: Word('перекусывал', 5),
  femininePast: Word('перекусывала', 5),
  neuterPast: Word('перекусывало', 5),
  pluralPast: Word('перекусывали', 5),
  imperativeInformal: Word('перекусывай', 5),
  imperativeFormal: Word('перекусывайте', 5),
  imperfect: [],
};

perfectVerbs.set(перекусывать.name.text, перекусывать);

export { перекусывать };