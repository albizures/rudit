import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проступать: PerfectVerb = {
  name: Word('проступать', 7),
  singular1stPerson: Word('проступаю', 7),
  singular2ndPerson: Word('проступаешь', 7),
  singular3rdPerson: Word('проступает', 7),
  plural1stPerson: Word('проступаем', 7),
  plural2ndPerson: Word('проступаете', 7),
  plural3rdPerson: Word('проступают', 7),
  masculinePast: Word('проступал', 7),
  femininePast: Word('проступала', 7),
  neuterPast: Word('проступало', 7),
  pluralPast: Word('проступали', 7),
  imperativeInformal: Word('проступай', 7),
  imperativeFormal: Word('проступайте', 7),
  imperfect: [],
};

perfectVerbs.set(проступать.name.text, проступать);

export { проступать };