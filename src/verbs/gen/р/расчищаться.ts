import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расчищаться: PerfectVerb = {
  name: Word('расчищаться', 6),
  singular1stPerson: Word('расчищаюсь', 6),
  singular2ndPerson: Word('расчищаешься', 6),
  singular3rdPerson: Word('расчищается', 6),
  plural1stPerson: Word('расчищаемся', 6),
  plural2ndPerson: Word('расчищаетесь', 6),
  plural3rdPerson: Word('расчищаются', 6),
  masculinePast: Word('расчищался', 6),
  femininePast: Word('расчищалась', 6),
  neuterPast: Word('расчищалось', 6),
  pluralPast: Word('расчищались', 6),
  imperativeInformal: Word('расчищайся', 6),
  imperativeFormal: Word('расчищайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(расчищаться.name.text, расчищаться);

export { расчищаться };