import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прижиматься: PerfectVerb = {
  name: Word('прижиматься', 6),
  singular1stPerson: Word('прижимаюсь', 6),
  singular2ndPerson: Word('прижимаешься', 6),
  singular3rdPerson: Word('прижимается', 6),
  plural1stPerson: Word('прижимаемся', 6),
  plural2ndPerson: Word('прижимаетесь', 6),
  plural3rdPerson: Word('прижимаются', 6),
  masculinePast: Word('прижимался', 6),
  femininePast: Word('прижималась', 6),
  neuterPast: Word('прижималось', 6),
  pluralPast: Word('прижимались', 6),
  imperativeInformal: Word('прижимайся', 6),
  imperativeFormal: Word('прижимайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(прижиматься.name.text, прижиматься);

export { прижиматься };