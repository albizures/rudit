import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплёскиваться: PerfectVerb = {
  name: Word('выплёскиваться', 9),
  singular1stPerson: Word('выплёскиваюсь', 9),
  singular2ndPerson: Word('выплёскиваешься', 9),
  singular3rdPerson: Word('выплёскивается', 9),
  plural1stPerson: Word('выплёскиваемся', 9),
  plural2ndPerson: Word('выплёскиваетесь', 9),
  plural3rdPerson: Word('выплёскиваются', 9),
  masculinePast: Word('выплёскивался', 9),
  femininePast: Word('выплёскивалась', 9),
  neuterPast: Word('выплёскивалось', 9),
  pluralPast: Word('выплёскивались', 9),
  imperativeInformal: Word('выплёскивайся', 9),
  imperativeFormal: Word('выплёскивайтесь', 9),
  imperfect: [],
};

perfectVerbs.set(выплёскиваться.name.text, выплёскиваться);

export { выплёскиваться };