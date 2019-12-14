import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откручиваться: PerfectVerb = {
  name: Word('откручиваться', 4),
  singular1stPerson: Word('откручиваюсь', 4),
  singular2ndPerson: Word('откручиваешься', 4),
  singular3rdPerson: Word('откручивается', 4),
  plural1stPerson: Word('откручиваемся', 4),
  plural2ndPerson: Word('откручиваетесь', 4),
  plural3rdPerson: Word('откручиваются', 4),
  masculinePast: Word('откручивался', 4),
  femininePast: Word('откручивалась', 4),
  neuterPast: Word('откручивалось', 4),
  pluralPast: Word('откручивались', 4),
  imperativeInformal: Word('откручивайся', 4),
  imperativeFormal: Word('откручивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(откручиваться.name.text, откручиваться);

export { откручиваться };