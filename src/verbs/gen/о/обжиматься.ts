import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжиматься: PerfectVerb = {
  name: Word('обжиматься', 5),
  singular1stPerson: Word('обжимаюсь', 5),
  singular2ndPerson: Word('обжимаешься', 5),
  singular3rdPerson: Word('обжимается', 5),
  plural1stPerson: Word('обжимаемся', 5),
  plural2ndPerson: Word('обжимаетесь', 5),
  plural3rdPerson: Word('обжимаются', 5),
  masculinePast: Word('обжимался', 5),
  femininePast: Word('обжималась', 5),
  neuterPast: Word('обжималось', 5),
  pluralPast: Word('обжимались', 5),
  imperativeInformal: Word('обжимайся', 5),
  imperativeFormal: Word('обжимайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обжиматься.name.text, обжиматься);

export { обжиматься };