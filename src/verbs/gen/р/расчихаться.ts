import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расчихаться: PerfectVerb = {
  name: Word('расчихаться', 6),
  singular1stPerson: Word('расчихаюсь', 6),
  singular2ndPerson: Word('расчихаешься', 6),
  singular3rdPerson: Word('расчихается', 6),
  plural1stPerson: Word('расчихаемся', 6),
  plural2ndPerson: Word('расчихаетесь', 6),
  plural3rdPerson: Word('расчихаются', 6),
  masculinePast: Word('расчихался', 6),
  femininePast: Word('расчихалась', 6),
  neuterPast: Word('расчихалось', 6),
  pluralPast: Word('расчихались', 6),
  imperativeInformal: Word('расчихайся', 6),
  imperativeFormal: Word('расчихайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(расчихаться.name.text, расчихаться);

export { расчихаться };