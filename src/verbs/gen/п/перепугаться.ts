import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепугаться: PerfectVerb = {
  name: Word('перепугаться', 7),
  singular1stPerson: Word('перепугаюсь', 7),
  singular2ndPerson: Word('перепугаешься', 7),
  singular3rdPerson: Word('перепугается', 7),
  plural1stPerson: Word('перепугаемся', 7),
  plural2ndPerson: Word('перепугаетесь', 7),
  plural3rdPerson: Word('перепугаются', 7),
  masculinePast: Word('перепугался', 7),
  femininePast: Word('перепугалась', 7),
  neuterPast: Word('перепугалось', 7),
  pluralPast: Word('перепугались', 7),
  imperativeInformal: Word('перепугайся', 7),
  imperativeFormal: Word('перепугайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перепугаться.name.text, перепугаться);

export { перепугаться };