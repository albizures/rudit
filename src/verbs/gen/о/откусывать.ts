import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откусывать: PerfectVerb = {
  name: Word('откусывать', 3),
  singular1stPerson: Word('откусываю', 3),
  singular2ndPerson: Word('откусываешь', 3),
  singular3rdPerson: Word('откусывает', 3),
  plural1stPerson: Word('откусываем', 3),
  plural2ndPerson: Word('откусываете', 3),
  plural3rdPerson: Word('откусывают', 3),
  masculinePast: Word('откусывал', 3),
  femininePast: Word('откусывала', 3),
  neuterPast: Word('откусывало', 3),
  pluralPast: Word('откусывали', 3),
  imperativeInformal: Word('откусывай', 3),
  imperativeFormal: Word('откусывайте', 3),
  imperfect: [],
};

perfectVerbs.set(откусывать.name.text, откусывать);

export { откусывать };