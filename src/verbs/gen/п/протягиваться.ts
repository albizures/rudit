import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протягиваться: PerfectVerb = {
  name: Word('протягиваться', 4),
  singular1stPerson: Word('протягиваюсь', 4),
  singular2ndPerson: Word('протягиваешься', 4),
  singular3rdPerson: Word('протягивается', 4),
  plural1stPerson: Word('протягиваемся', 4),
  plural2ndPerson: Word('протягиваетесь', 4),
  plural3rdPerson: Word('протягиваются', 4),
  masculinePast: Word('протягивался', 4),
  femininePast: Word('протягивалась', 4),
  neuterPast: Word('протягивалось', 4),
  pluralPast: Word('протягивались', 4),
  imperativeInformal: Word('протягивайся', 4),
  imperativeFormal: Word('протягивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(протягиваться.name.text, протягиваться);

export { протягиваться };