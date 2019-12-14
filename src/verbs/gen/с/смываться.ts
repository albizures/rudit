import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смываться: PerfectVerb = {
  name: Word('смываться', 4),
  singular1stPerson: Word('смываюсь', 4),
  singular2ndPerson: Word('смываешься', 4),
  singular3rdPerson: Word('смывается', 4),
  plural1stPerson: Word('смываемся', 4),
  plural2ndPerson: Word('смываетесь', 4),
  plural3rdPerson: Word('смываются', 4),
  masculinePast: Word('смывался', 4),
  femininePast: Word('смывалась', 4),
  neuterPast: Word('смывалось', 4),
  pluralPast: Word('смывались', 4),
  imperativeInformal: Word('смывайся', 4),
  imperativeFormal: Word('смывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(смываться.name.text, смываться);

export { смываться };