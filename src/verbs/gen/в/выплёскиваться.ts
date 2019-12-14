import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплёскиваться: PerfectVerb = {
  name: Word('выплёскиваться', 4),
  singular1stPerson: Word('выплёскиваюсь', 4),
  singular2ndPerson: Word('выплёскиваешься', 4),
  singular3rdPerson: Word('выплёскивается', 4),
  plural1stPerson: Word('выплёскиваемся', 4),
  plural2ndPerson: Word('выплёскиваетесь', 4),
  plural3rdPerson: Word('выплёскиваются', 4),
  masculinePast: Word('выплёскивался', 4),
  femininePast: Word('выплёскивалась', 4),
  neuterPast: Word('выплёскивалось', 4),
  pluralPast: Word('выплёскивались', 4),
  imperativeInformal: Word('выплёскивайся', 4),
  imperativeFormal: Word('выплёскивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(выплёскиваться.name.text, выплёскиваться);

export { выплёскиваться };