import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const аккомпанировать: PerfectVerb = {
  name: Word('аккомпанировать', 8),
  singular1stPerson: Word('аккомпанирую', 8),
  singular2ndPerson: Word('аккомпанируешь', 8),
  singular3rdPerson: Word('аккомпанирует', 8),
  plural1stPerson: Word('аккомпанируем', 8),
  plural2ndPerson: Word('аккомпанируете', 8),
  plural3rdPerson: Word('аккомпанируют', 8),
  masculinePast: Word('аккомпанировал', 8),
  femininePast: Word('аккомпанировала', 8),
  neuterPast: Word('аккомпанировало', 8),
  pluralPast: Word('аккомпанировали', 8),
  imperativeInformal: Word('аккомпанируй', 8),
  imperativeFormal: Word('аккомпанируйте', 8),
  imperfect: ['саккомпанировать','проаккомпанировать'],
};

perfectVerbs.set(аккомпанировать.name.text, аккомпанировать);

export { аккомпанировать };