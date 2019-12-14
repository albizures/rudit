import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продвигать: PerfectVerb = {
  name: Word('продвигать', 5),
  singular1stPerson: Word('продвигаю', 5),
  singular2ndPerson: Word('продвигаешь', 5),
  singular3rdPerson: Word('продвигает', 5),
  plural1stPerson: Word('продвигаем', 5),
  plural2ndPerson: Word('продвигаете', 5),
  plural3rdPerson: Word('продвигают', 5),
  masculinePast: Word('продвигал', 5),
  femininePast: Word('продвигала', 5),
  neuterPast: Word('продвигало', 5),
  pluralPast: Word('продвигали', 5),
  imperativeInformal: Word('продвигай', 5),
  imperativeFormal: Word('продвигайте', 5),
  imperfect: [],
};

perfectVerbs.set(продвигать.name.text, продвигать);

export { продвигать };