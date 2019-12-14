import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расквитаться: PerfectVerb = {
  name: Word('расквитаться', 7),
  singular1stPerson: Word('расквитаюсь', 7),
  singular2ndPerson: Word('расквитаешься', 7),
  singular3rdPerson: Word('расквитается', 7),
  plural1stPerson: Word('расквитаемся', 7),
  plural2ndPerson: Word('расквитаетесь', 7),
  plural3rdPerson: Word('расквитаются', 7),
  masculinePast: Word('расквитался', 7),
  femininePast: Word('расквиталась', 7),
  neuterPast: Word('расквиталось', 7),
  pluralPast: Word('расквитались', 7),
  imperativeInformal: Word('расквитайся', 7),
  imperativeFormal: Word('расквитайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(расквитаться.name.text, расквитаться);

export { расквитаться };