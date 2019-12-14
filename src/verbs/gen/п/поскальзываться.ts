import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поскальзываться: PerfectVerb = {
  name: Word('поскальзываться', 4),
  singular1stPerson: Word('поскальзываюсь', 4),
  singular2ndPerson: Word('поскальзываешься', 4),
  singular3rdPerson: Word('поскальзывается', 4),
  plural1stPerson: Word('поскальзываемся', 4),
  plural2ndPerson: Word('поскальзываетесь', 4),
  plural3rdPerson: Word('поскальзываются', 4),
  masculinePast: Word('поскальзывался', 4),
  femininePast: Word('поскальзывалась', 4),
  neuterPast: Word('поскальзывалось', 4),
  pluralPast: Word('поскальзывались', 4),
  imperativeInformal: Word('поскальзывайся', 4),
  imperativeFormal: Word('поскальзывайтесь', 4),
  imperfect: ['поскользнуться'],
};

perfectVerbs.set(поскальзываться.name.text, поскальзываться);

export { поскальзываться };