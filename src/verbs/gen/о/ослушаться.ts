import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ослушаться: PerfectVerb = {
  name: Word('ослушаться', 3),
  singular1stPerson: Word('ослушаюсь', 3),
  singular2ndPerson: Word('ослушаешься', 3),
  singular3rdPerson: Word('ослушается', 3),
  plural1stPerson: Word('ослушаемся', 3),
  plural2ndPerson: Word('ослушаетесь', 3),
  plural3rdPerson: Word('ослушаются', 3),
  masculinePast: Word('ослушался', 3),
  femininePast: Word('ослушалась', 3),
  neuterPast: Word('ослушалось', 3),
  pluralPast: Word('ослушались', 3),
  imperativeInformal: Word('ослушайся', 3),
  imperativeFormal: Word('ослушайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(ослушаться.name.text, ослушаться);

export { ослушаться };