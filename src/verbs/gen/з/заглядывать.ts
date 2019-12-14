import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заглядывать: PerfectVerb = {
  name: Word('заглядывать', 4),
  singular1stPerson: Word('заглядываю', 4),
  singular2ndPerson: Word('заглядываешь', 4),
  singular3rdPerson: Word('заглядывает', 4),
  plural1stPerson: Word('заглядываем', 4),
  plural2ndPerson: Word('заглядываете', 4),
  plural3rdPerson: Word('заглядывают', 4),
  masculinePast: Word('заглядывал', 4),
  femininePast: Word('заглядывала', 4),
  neuterPast: Word('заглядывало', 4),
  pluralPast: Word('заглядывали', 4),
  imperativeInformal: Word('заглядывай', 4),
  imperativeFormal: Word('заглядывайте', 4),
  imperfect: ['заглянуть'],
};

perfectVerbs.set(заглядывать.name.text, заглядывать);

export { заглядывать };