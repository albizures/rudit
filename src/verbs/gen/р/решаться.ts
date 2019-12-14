import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const решаться: PerfectVerb = {
  name: Word('решаться', 3),
  singular1stPerson: Word('решаюсь', 3),
  singular2ndPerson: Word('решаешься', 3),
  singular3rdPerson: Word('решается', 3),
  plural1stPerson: Word('решаемся', 3),
  plural2ndPerson: Word('решаетесь', 3),
  plural3rdPerson: Word('решаются', 3),
  masculinePast: Word('решался', 3),
  femininePast: Word('решалась', 3),
  neuterPast: Word('решалось', 3),
  pluralPast: Word('решались', 3),
  imperativeInformal: Word('решайся', 3),
  imperativeFormal: Word('решайтесь', 3),
  imperfect: ['решиться'],
};

perfectVerbs.set(решаться.name.text, решаться);

export { решаться };