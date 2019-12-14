import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарушаться: PerfectVerb = {
  name: Word('нарушаться', 5),
  singular1stPerson: Word('нарушаюсь', 5),
  singular2ndPerson: Word('нарушаешься', 5),
  singular3rdPerson: Word('нарушается', 5),
  plural1stPerson: Word('нарушаемся', 5),
  plural2ndPerson: Word('нарушаетесь', 5),
  plural3rdPerson: Word('нарушаются', 5),
  masculinePast: Word('нарушался', 5),
  femininePast: Word('нарушалась', 5),
  neuterPast: Word('нарушалось', 5),
  pluralPast: Word('нарушались', 5),
  imperativeInformal: Word('нарушайся', 5),
  imperativeFormal: Word('нарушайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(нарушаться.name.text, нарушаться);

export { нарушаться };