import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предполагаться: PerfectVerb = {
  name: Word('предполагаться', 9),
  singular1stPerson: Word('предполагаюсь', 9),
  singular2ndPerson: Word('предполагаешься', 9),
  singular3rdPerson: Word('предполагается', 9),
  plural1stPerson: Word('предполагаемся', 9),
  plural2ndPerson: Word('предполагаетесь', 9),
  plural3rdPerson: Word('предполагаются', 9),
  masculinePast: Word('предполагался', 9),
  femininePast: Word('предполагалась', 9),
  neuterPast: Word('предполагалось', 9),
  pluralPast: Word('предполагались', 9),
  imperativeInformal: Word('предполагайся', 9),
  imperativeFormal: Word('предполагайтесь', 9),
  imperfect: [],
};

perfectVerbs.set(предполагаться.name.text, предполагаться);

export { предполагаться };