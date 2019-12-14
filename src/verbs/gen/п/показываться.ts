import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const показываться: PerfectVerb = {
  name: Word('показываться', 3),
  singular1stPerson: Word('показываюсь', 3),
  singular2ndPerson: Word('показываешься', 3),
  singular3rdPerson: Word('показывается', 3),
  plural1stPerson: Word('показываемся', 3),
  plural2ndPerson: Word('показываетесь', 3),
  plural3rdPerson: Word('показываются', 3),
  masculinePast: Word('показывался', 3),
  femininePast: Word('показывалась', 3),
  neuterPast: Word('показывалось', 3),
  pluralPast: Word('показывались', 3),
  imperativeInformal: Word('показывайся', 3),
  imperativeFormal: Word('показывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(показываться.name.text, показываться);

export { показываться };