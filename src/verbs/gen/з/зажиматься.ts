import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажиматься: PerfectVerb = {
  name: Word('зажиматься', 5),
  singular1stPerson: Word('зажимаюсь', 5),
  singular2ndPerson: Word('зажимаешься', 5),
  singular3rdPerson: Word('зажимается', 5),
  plural1stPerson: Word('зажимаемся', 5),
  plural2ndPerson: Word('зажимаетесь', 5),
  plural3rdPerson: Word('зажимаются', 5),
  masculinePast: Word('зажимался', 5),
  femininePast: Word('зажималась', 5),
  neuterPast: Word('зажималось', 5),
  pluralPast: Word('зажимались', 5),
  imperativeInformal: Word('зажимайся', 5),
  imperativeFormal: Word('зажимайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(зажиматься.name.text, зажиматься);

export { зажиматься };