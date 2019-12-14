import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ползать: PerfectVerb = {
  name: Word('ползать', 1),
  singular1stPerson: Word('ползаю', 1),
  singular2ndPerson: Word('ползаешь', 1),
  singular3rdPerson: Word('ползает', 1),
  plural1stPerson: Word('ползаем', 1),
  plural2ndPerson: Word('ползаете', 1),
  plural3rdPerson: Word('ползают', 1),
  masculinePast: Word('ползал', 1),
  femininePast: Word('ползала', 1),
  neuterPast: Word('ползало', 1),
  pluralPast: Word('ползали', 1),
  imperativeInformal: Word('ползай', 1),
  imperativeFormal: Word('ползайте', 1),
  imperfect: ['поползать'],
};

perfectVerbs.set(ползать.name.text, ползать);

export { ползать };