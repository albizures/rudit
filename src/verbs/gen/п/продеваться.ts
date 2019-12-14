import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продеваться: PerfectVerb = {
  name: Word('продеваться', 6),
  singular1stPerson: Word('продеваюсь', 6),
  singular2ndPerson: Word('продеваешься', 6),
  singular3rdPerson: Word('продевается', 6),
  plural1stPerson: Word('продеваемся', 6),
  plural2ndPerson: Word('продеваетесь', 6),
  plural3rdPerson: Word('продеваются', 6),
  masculinePast: Word('продевался', 6),
  femininePast: Word('продевалась', 6),
  neuterPast: Word('продевалось', 6),
  pluralPast: Word('продевались', 6),
  imperativeInformal: Word('продевайся', 6),
  imperativeFormal: Word('продевайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(продеваться.name.text, продеваться);

export { продеваться };