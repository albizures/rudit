import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трепыхаться: PerfectVerb = {
  name: Word('трепыхаться', 6),
  singular1stPerson: Word('трепыхаюсь', 6),
  singular2ndPerson: Word('трепыхаешься', 6),
  singular3rdPerson: Word('трепыхается', 6),
  plural1stPerson: Word('трепыхаемся', 6),
  plural2ndPerson: Word('трепыхаетесь', 6),
  plural3rdPerson: Word('трепыхаются', 6),
  masculinePast: Word('трепыхался', 6),
  femininePast: Word('трепыхалась', 6),
  neuterPast: Word('трепыхалось', 6),
  pluralPast: Word('трепыхались', 6),
  imperativeInformal: Word('трепыхайся', 6),
  imperativeFormal: Word('трепыхайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(трепыхаться.name.text, трепыхаться);

export { трепыхаться };