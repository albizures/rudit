import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отжиматься: PerfectVerb = {
  name: Word('отжиматься', 5),
  singular1stPerson: Word('отжимаюсь', 5),
  singular2ndPerson: Word('отжимаешься', 5),
  singular3rdPerson: Word('отжимается', 5),
  plural1stPerson: Word('отжимаемся', 5),
  plural2ndPerson: Word('отжимаетесь', 5),
  plural3rdPerson: Word('отжимаются', 5),
  masculinePast: Word('отжимался', 5),
  femininePast: Word('отжималась', 5),
  neuterPast: Word('отжималось', 5),
  pluralPast: Word('отжимались', 5),
  imperativeInformal: Word('отжимайся', 5),
  imperativeFormal: Word('отжимайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отжиматься.name.text, отжиматься);

export { отжиматься };