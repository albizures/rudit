import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепутаться: PerfectVerb = {
  name: Word('перепутаться', 5),
  singular1stPerson: Word('перепутаюсь', 5),
  singular2ndPerson: Word('перепутаешься', 5),
  singular3rdPerson: Word('перепутается', 5),
  plural1stPerson: Word('перепутаемся', 5),
  plural2ndPerson: Word('перепутаетесь', 5),
  plural3rdPerson: Word('перепутаются', 5),
  masculinePast: Word('перепутался', 5),
  femininePast: Word('перепуталась', 5),
  neuterPast: Word('перепуталось', 5),
  pluralPast: Word('перепутались', 5),
  imperativeInformal: Word('перепутайся', 5),
  imperativeFormal: Word('перепутайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перепутаться.name.text, перепутаться);

export { перепутаться };