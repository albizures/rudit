import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отчитаться: PerfectVerb = {
  name: Word('отчитаться', 5),
  singular1stPerson: Word('отчитаюсь', 5),
  singular2ndPerson: Word('отчитаешься', 5),
  singular3rdPerson: Word('отчитается', 5),
  plural1stPerson: Word('отчитаемся', 5),
  plural2ndPerson: Word('отчитаетесь', 5),
  plural3rdPerson: Word('отчитаются', 5),
  masculinePast: Word('отчитался', 5),
  femininePast: Word('отчиталась', 5),
  neuterPast: Word('отчиталось', 5),
  pluralPast: Word('отчитались', 5),
  imperativeInformal: Word('отчитайся', 5),
  imperativeFormal: Word('отчитайтесь', 5),
  imperfect: ['отчитываться'],
};

perfectVerbs.set(отчитаться.name.text, отчитаться);

export { отчитаться };