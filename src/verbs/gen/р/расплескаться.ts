import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплескаться: PerfectVerb = {
  name: Word('расплескаться', 8),
  singular1stPerson: Word('расплещусь', 7),
  singular2ndPerson: Word('расплещешься', 5),
  singular3rdPerson: Word('расплещется', 5),
  plural1stPerson: Word('расплещемся', 5),
  plural2ndPerson: Word('расплещетесь', 5),
  plural3rdPerson: Word('расплещутся', 5),
  masculinePast: Word('расплескался', 8),
  femininePast: Word('расплескалась', 8),
  neuterPast: Word('расплескалось', 8),
  pluralPast: Word('расплескались', 8),
  imperativeInformal: Word('расплещись', 7),
  imperativeFormal: Word('расплещитесь', 7),
  imperfect: [],
};

perfectVerbs.set(расплескаться.name.text, расплескаться);

export { расплескаться };