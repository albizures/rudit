import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почитаться: PerfectVerb = {
  name: Word('почитаться', 5),
  singular1stPerson: Word('почитаюсь', 5),
  singular2ndPerson: Word('почитаешься', 5),
  singular3rdPerson: Word('почитается', 5),
  plural1stPerson: Word('почитаемся', 5),
  plural2ndPerson: Word('почитаетесь', 5),
  plural3rdPerson: Word('почитаются', 5),
  masculinePast: Word('почитался', 5),
  femininePast: Word('почиталась', 5),
  neuterPast: Word('почиталось', 5),
  pluralPast: Word('почитались', 5),
  imperativeInformal: Word('почитайся', 5),
  imperativeFormal: Word('почитайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(почитаться.name.text, почитаться);

export { почитаться };