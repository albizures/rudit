import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропитываться: PerfectVerb = {
  name: Word('пропитываться', 4),
  singular1stPerson: Word('пропитываюсь', 4),
  singular2ndPerson: Word('пропитываешься', 4),
  singular3rdPerson: Word('пропитывается', 4),
  plural1stPerson: Word('пропитываемся', 4),
  plural2ndPerson: Word('пропитываетесь', 4),
  plural3rdPerson: Word('пропитываются', 4),
  masculinePast: Word('пропитывался', 4),
  femininePast: Word('пропитывалась', 4),
  neuterPast: Word('пропитывалось', 4),
  pluralPast: Word('пропитывались', 4),
  imperativeInformal: Word('пропитывайся', 4),
  imperativeFormal: Word('пропитывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(пропитываться.name.text, пропитываться);

export { пропитываться };