import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проливаться: PerfectVerb = {
  name: Word('проливаться', 6),
  singular1stPerson: Word('проливаюсь', 6),
  singular2ndPerson: Word('проливаешься', 6),
  singular3rdPerson: Word('проливается', 6),
  plural1stPerson: Word('проливаемся', 6),
  plural2ndPerson: Word('проливаетесь', 6),
  plural3rdPerson: Word('проливаются', 6),
  masculinePast: Word('проливался', 6),
  femininePast: Word('проливалась', 6),
  neuterPast: Word('проливалось', 6),
  pluralPast: Word('проливались', 6),
  imperativeInformal: Word('проливайся', 6),
  imperativeFormal: Word('проливайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(проливаться.name.text, проливаться);

export { проливаться };