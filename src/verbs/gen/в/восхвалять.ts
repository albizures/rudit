import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восхвалять: PerfectVerb = {
  name: Word('восхвалять', 7),
  singular1stPerson: Word('восхваляю', 7),
  singular2ndPerson: Word('восхваляешь', 7),
  singular3rdPerson: Word('восхваляет', 7),
  plural1stPerson: Word('восхваляем', 7),
  plural2ndPerson: Word('восхваляете', 7),
  plural3rdPerson: Word('восхваляют', 7),
  masculinePast: Word('восхвалял', 7),
  femininePast: Word('восхваляла', 7),
  neuterPast: Word('восхваляло', 7),
  pluralPast: Word('восхваляли', 7),
  imperativeInformal: Word('восхваляй', 7),
  imperativeFormal: Word('восхваляйте', 7),
  imperfect: [],
};

perfectVerbs.set(восхвалять.name.text, восхвалять);

export { восхвалять };