import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мешать: PerfectVerb = {
  name: Word('мешать', 3),
  singular1stPerson: Word('мешаю', 3),
  singular2ndPerson: Word('мешаешь', 3),
  singular3rdPerson: Word('мешает', 3),
  plural1stPerson: Word('мешаем', 3),
  plural2ndPerson: Word('мешаете', 3),
  plural3rdPerson: Word('мешают', 3),
  masculinePast: Word('мешал', 3),
  femininePast: Word('мешала', 3),
  neuterPast: Word('мешало', 3),
  pluralPast: Word('мешали', 3),
  imperativeInformal: Word('мешай', 3),
  imperativeFormal: Word('мешайте', 3),
  imperfect: ['размешать','смешать','перемешать'],
};

perfectVerbs.set(мешать.name.text, мешать);

export { мешать };