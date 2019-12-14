import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доползать: PerfectVerb = {
  name: Word('доползать', 6),
  singular1stPerson: Word('доползаю', 6),
  singular2ndPerson: Word('доползаешь', 6),
  singular3rdPerson: Word('доползает', 6),
  plural1stPerson: Word('доползаем', 6),
  plural2ndPerson: Word('доползаете', 6),
  plural3rdPerson: Word('доползают', 6),
  masculinePast: Word('доползал', 6),
  femininePast: Word('доползала', 6),
  neuterPast: Word('доползало', 6),
  pluralPast: Word('доползали', 6),
  imperativeInformal: Word('доползай', 6),
  imperativeFormal: Word('доползайте', 6),
  imperfect: [],
};

perfectVerbs.set(доползать.name.text, доползать);

export { доползать };