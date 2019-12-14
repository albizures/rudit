import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ссыхаться: PerfectVerb = {
  name: Word('ссыхаться', 4),
  singular1stPerson: Word('ссыхаюсь', 4),
  singular2ndPerson: Word('ссыхаешься', 4),
  singular3rdPerson: Word('ссыхается', 4),
  plural1stPerson: Word('ссыхаемся', 4),
  plural2ndPerson: Word('ссыхаетесь', 4),
  plural3rdPerson: Word('ссыхаются', 4),
  masculinePast: Word('ссыхался', 4),
  femininePast: Word('ссыхалась', 4),
  neuterPast: Word('ссыхалось', 4),
  pluralPast: Word('ссыхались', 4),
  imperativeInformal: Word('ссыхайся', 4),
  imperativeFormal: Word('ссыхайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(ссыхаться.name.text, ссыхаться);

export { ссыхаться };