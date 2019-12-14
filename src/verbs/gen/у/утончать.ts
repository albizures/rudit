import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утончать: PerfectVerb = {
  name: Word('утончать', 5),
  singular1stPerson: Word('утончаю', 5),
  singular2ndPerson: Word('утончаешь', 5),
  singular3rdPerson: Word('утончает', 5),
  plural1stPerson: Word('утончаем', 5),
  plural2ndPerson: Word('утончаете', 5),
  plural3rdPerson: Word('утончают', 5),
  masculinePast: Word('утончал', 5),
  femininePast: Word('утончала', 5),
  neuterPast: Word('утончало', 5),
  pluralPast: Word('утончали', 5),
  imperativeInformal: Word('утончай', 5),
  imperativeFormal: Word('утончайте', 5),
  imperfect: [],
};

perfectVerbs.set(утончать.name.text, утончать);

export { утончать };