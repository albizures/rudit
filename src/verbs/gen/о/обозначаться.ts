import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обозначаться: PerfectVerb = {
  name: Word('обозначаться', 7),
  singular1stPerson: Word('обозначаюсь', 7),
  singular2ndPerson: Word('обозначаешься', 7),
  singular3rdPerson: Word('обозначается', 7),
  plural1stPerson: Word('обозначаемся', 7),
  plural2ndPerson: Word('обозначаетесь', 7),
  plural3rdPerson: Word('обозначаются', 7),
  masculinePast: Word('обозначался', 7),
  femininePast: Word('обозначалась', 7),
  neuterPast: Word('обозначалось', 7),
  pluralPast: Word('обозначались', 7),
  imperativeInformal: Word('обозначайся', 7),
  imperativeFormal: Word('обозначайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(обозначаться.name.text, обозначаться);

export { обозначаться };