import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проползать: PerfectVerb = {
  name: Word('проползать', 7),
  singular1stPerson: Word('проползаю', 7),
  singular2ndPerson: Word('проползаешь', 7),
  singular3rdPerson: Word('проползает', 7),
  plural1stPerson: Word('проползаем', 7),
  plural2ndPerson: Word('проползаете', 7),
  plural3rdPerson: Word('проползают', 7),
  masculinePast: Word('проползал', 7),
  femininePast: Word('проползала', 7),
  neuterPast: Word('проползало', 7),
  pluralPast: Word('проползали', 7),
  imperativeInformal: Word('проползай', 7),
  imperativeFormal: Word('проползайте', 7),
  imperfect: [],
};

perfectVerbs.set(проползать.name.text, проползать);

export { проползать };