import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ощипывать: PerfectVerb = {
  name: Word('ощипывать', 2),
  singular1stPerson: Word('ощипываю', 2),
  singular2ndPerson: Word('ощипываешь', 2),
  singular3rdPerson: Word('ощипывает', 2),
  plural1stPerson: Word('ощипываем', 2),
  plural2ndPerson: Word('ощипываете', 2),
  plural3rdPerson: Word('ощипывают', 2),
  masculinePast: Word('ощипывал', 2),
  femininePast: Word('ощипывала', 2),
  neuterPast: Word('ощипывало', 2),
  pluralPast: Word('ощипывали', 2),
  imperativeInformal: Word('ощипывай', 2),
  imperativeFormal: Word('ощипывайте', 2),
  imperfect: [],
};

perfectVerbs.set(ощипывать.name.text, ощипывать);

export { ощипывать };