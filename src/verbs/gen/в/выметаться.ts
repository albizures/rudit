import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выметаться: PerfectVerb = {
  name: Word('выметаться', 5),
  singular1stPerson: Word('выметаюсь', 5),
  singular2ndPerson: Word('выметаешься', 5),
  singular3rdPerson: Word('выметается', 5),
  plural1stPerson: Word('выметаемся', 5),
  plural2ndPerson: Word('выметаетесь', 5),
  plural3rdPerson: Word('выметаются', 5),
  masculinePast: Word('выметался', 5),
  femininePast: Word('выметалась', 5),
  neuterPast: Word('выметалось', 5),
  pluralPast: Word('выметались', 5),
  imperativeInformal: Word('выметайся', 5),
  imperativeFormal: Word('выметайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(выметаться.name.text, выметаться);

export { выметаться };