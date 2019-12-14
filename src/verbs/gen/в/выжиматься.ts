import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выжиматься: PerfectVerb = {
  name: Word('выжиматься', 5),
  singular1stPerson: Word('выжимаюсь', 5),
  singular2ndPerson: Word('выжимаешься', 5),
  singular3rdPerson: Word('выжимается', 5),
  plural1stPerson: Word('выжимаемся', 5),
  plural2ndPerson: Word('выжимаетесь', 5),
  plural3rdPerson: Word('выжимаются', 5),
  masculinePast: Word('выжимался', 5),
  femininePast: Word('выжималась', 5),
  neuterPast: Word('выжималось', 5),
  pluralPast: Word('выжимались', 5),
  imperativeInformal: Word('выжимайся', 5),
  imperativeFormal: Word('выжимайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(выжиматься.name.text, выжиматься);

export { выжиматься };