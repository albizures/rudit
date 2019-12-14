import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заключаться: PerfectVerb = {
  name: Word('заключаться', 6),
  singular1stPerson: Word('заключаюсь', 6),
  singular2ndPerson: Word('заключаешься', 6),
  singular3rdPerson: Word('заключается', 6),
  plural1stPerson: Word('заключаемся', 6),
  plural2ndPerson: Word('заключаетесь', 6),
  plural3rdPerson: Word('заключаются', 6),
  masculinePast: Word('заключался', 6),
  femininePast: Word('заключалась', 6),
  neuterPast: Word('заключалось', 6),
  pluralPast: Word('заключались', 6),
  imperativeInformal: Word('заключайся', 6),
  imperativeFormal: Word('заключайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(заключаться.name.text, заключаться);

export { заключаться };