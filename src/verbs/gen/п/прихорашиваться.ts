import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прихорашиваться: PerfectVerb = {
  name: Word('прихорашиваться', 6),
  singular1stPerson: Word('прихорашиваюсь', 6),
  singular2ndPerson: Word('прихорашиваешься', 6),
  singular3rdPerson: Word('прихорашивается', 6),
  plural1stPerson: Word('прихорашиваемся', 6),
  plural2ndPerson: Word('прихорашиваетесь', 6),
  plural3rdPerson: Word('прихорашиваются', 6),
  masculinePast: Word('прихорашивался', 6),
  femininePast: Word('прихорашивалась', 6),
  neuterPast: Word('прихорашивалось', 6),
  pluralPast: Word('прихорашивались', 6),
  imperativeInformal: Word('прихорашивайся', 6),
  imperativeFormal: Word('прихорашивайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(прихорашиваться.name.text, прихорашиваться);

export { прихорашиваться };