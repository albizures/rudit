import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охорашиваться: PerfectVerb = {
  name: Word('охорашиваться', 4),
  singular1stPerson: Word('охорашиваюсь', 4),
  singular2ndPerson: Word('охорашиваешься', 4),
  singular3rdPerson: Word('охорашивается', 4),
  plural1stPerson: Word('охорашиваемся', 4),
  plural2ndPerson: Word('охорашиваетесь', 4),
  plural3rdPerson: Word('охорашиваются', 4),
  masculinePast: Word('охорашивался', 4),
  femininePast: Word('охорашивалась', 4),
  neuterPast: Word('охорашивалось', 4),
  pluralPast: Word('охорашивались', 4),
  imperativeInformal: Word('охорашивайся', 4),
  imperativeFormal: Word('охорашивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(охорашиваться.name.text, охорашиваться);

export { охорашиваться };