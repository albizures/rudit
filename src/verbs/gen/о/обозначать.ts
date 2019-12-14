import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обозначать: PerfectVerb = {
  name: Word('обозначать', 7),
  singular1stPerson: Word('обозначаю', 7),
  singular2ndPerson: Word('обозначаешь', 7),
  singular3rdPerson: Word('обозначает', 7),
  plural1stPerson: Word('обозначаем', 7),
  plural2ndPerson: Word('обозначаете', 7),
  plural3rdPerson: Word('обозначают', 7),
  masculinePast: Word('обозначал', 7),
  femininePast: Word('обозначала', 7),
  neuterPast: Word('обозначало', 7),
  pluralPast: Word('обозначали', 7),
  imperativeInformal: Word('обозначай', 7),
  imperativeFormal: Word('обозначайте', 7),
  imperfect: [],
};

perfectVerbs.set(обозначать.name.text, обозначать);

export { обозначать };