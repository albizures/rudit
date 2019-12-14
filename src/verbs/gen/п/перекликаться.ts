import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекликаться: PerfectVerb = {
  name: Word('перекликаться', 8),
  singular1stPerson: Word('перекликаюсь', 8),
  singular2ndPerson: Word('перекликаешься', 8),
  singular3rdPerson: Word('перекликается', 8),
  plural1stPerson: Word('перекликаемся', 8),
  plural2ndPerson: Word('перекликаетесь', 8),
  plural3rdPerson: Word('перекликаются', 8),
  masculinePast: Word('перекликался', 8),
  femininePast: Word('перекликалась', 8),
  neuterPast: Word('перекликалось', 8),
  pluralPast: Word('перекликались', 8),
  imperativeInformal: Word('перекликайся', 8),
  imperativeFormal: Word('перекликайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(перекликаться.name.text, перекликаться);

export { перекликаться };