import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассыхаться: PerfectVerb = {
  name: Word('рассыхаться', 6),
  singular1stPerson: Word('рассыхаюсь', 6),
  singular2ndPerson: Word('рассыхаешься', 6),
  singular3rdPerson: Word('рассыхается', 6),
  plural1stPerson: Word('рассыхаемся', 6),
  plural2ndPerson: Word('рассыхаетесь', 6),
  plural3rdPerson: Word('рассыхаются', 6),
  masculinePast: Word('рассыхался', 6),
  femininePast: Word('рассыхалась', 6),
  neuterPast: Word('рассыхалось', 6),
  pluralPast: Word('рассыхались', 6),
  imperativeInformal: Word('рассыхайся', 6),
  imperativeFormal: Word('рассыхайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(рассыхаться.name.text, рассыхаться);

export { рассыхаться };