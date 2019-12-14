import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доигрываться: PerfectVerb = {
  name: Word('доигрываться', 2),
  singular1stPerson: Word('доигрываюсь', 2),
  singular2ndPerson: Word('доигрываешься', 2),
  singular3rdPerson: Word('доигрывается', 2),
  plural1stPerson: Word('доигрываемся', 2),
  plural2ndPerson: Word('доигрываетесь', 2),
  plural3rdPerson: Word('доигрываются', 2),
  masculinePast: Word('доигрывался', 2),
  femininePast: Word('доигрывалась', 2),
  neuterPast: Word('доигрывалось', 2),
  pluralPast: Word('доигрывались', 2),
  imperativeInformal: Word('доигрывайся', 2),
  imperativeFormal: Word('доигрывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(доигрываться.name.text, доигрываться);

export { доигрываться };