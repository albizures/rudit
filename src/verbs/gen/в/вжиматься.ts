import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вжиматься: PerfectVerb = {
  name: Word('вжиматься', 4),
  singular1stPerson: Word('вжимаюсь', 4),
  singular2ndPerson: Word('вжимаешься', 4),
  singular3rdPerson: Word('вжимается', 4),
  plural1stPerson: Word('вжимаемся', 4),
  plural2ndPerson: Word('вжимаетесь', 4),
  plural3rdPerson: Word('вжимаются', 4),
  masculinePast: Word('вжимался', 4),
  femininePast: Word('вжималась', 4),
  neuterPast: Word('вжималось', 4),
  pluralPast: Word('вжимались', 4),
  imperativeInformal: Word('вжимайся', 4),
  imperativeFormal: Word('вжимайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(вжиматься.name.text, вжиматься);

export { вжиматься };